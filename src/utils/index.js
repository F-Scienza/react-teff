export const totalPrice = products => {
	let sum = 0;

	products.map(product => {
		sum += product.price;
	});
    
	return sum;
};
