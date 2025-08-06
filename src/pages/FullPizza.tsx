import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

type Product = {
  imageUrl: string;
  title: string;
  price: number;
};

const FullProduct: React.FC = () => {
  const [product, setPizza] = React.useState<Product | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`http://localhost:3000/pizzas/${id}`);
        setPizza(data);
      } catch (err) {
        console.error(err);
        setError(true);
        alert('Ошибка при получении пиццы!');
        navigate('/');
      } finally {
        setLoading(false);
      }
    })();
  }, [id, navigate]);

  if (loading)
    return <div className="text-center mt-10 text-lg font-medium text-gray-600">Загрузка...</div>;
  if (error || !product) return null;

  return (
    <div className="container mx-auto p-6 max-w-md bg-white rounded-lg shadow-md">
      <img src={product.imageUrl} alt={product.title} className="mx-auto rounded-md mb-6" />
      <h2 className="text-3xl font-semibold mb-3 text-center">{product.title}</h2>
      <h4 className="text-xl font-medium mb-8 text-center">{product.price} ₽</h4>
      <Link to="/" className="flex justify-center">
        <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white px-6 py-2 rounded transition duration-300">
          Назад
        </button>
      </Link>
    </div>
  );
};

export default FullProduct;
