import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Head from 'next/head';

const ChefDetails = ({ chef }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [chef]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>{chef.name} - Chef Profile</title>
        <meta name="description" content="Chef Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
        <div className="p-4">
          <div className="text-xl font-bold mb-2">{chef.name}</div>
          <div className="text-gray-600 mb-4">{chef.specialty}</div>
          <div className="text-gray-600 mb-4">{chef.bio}</div>
          <div className="flex space-x-2">
            {chef.images.map((image, index) => (
              <img key={index} src={image} alt={`Chef ${chef.name}`} className="w-24 h-24 rounded-full object-cover" />
            ))}
          </div>
          <div className="mt-4">
            <div>Email: {chef.email}</div>
            <div>Mobile: {chef.mobile}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const url = `/api/chef/chefs/${id}`;

  try {
    const response = await axios.get(url);
    const chef = response.data;
    return {
      props: {
        chef,
      },
    };
  } catch (error) {
    console.error("Error fetching chef details:", error);
    return {
      notFound: true,
    };
  }
}

export default ChefDetails;
