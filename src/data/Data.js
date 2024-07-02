const fetchData = async () => {
  try {
    const response = await fetch('https://json-server.bytexl.app/products');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchData;
