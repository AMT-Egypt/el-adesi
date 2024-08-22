export const deleteItem = async (id: string, serviceType: "illness" | "marriage") => {
    try {
        const response = await fetch(`https://json-server-jade-two.vercel.app/${serviceType}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Item deleted successfully');
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        console.error('Error deleting the item:', error);
    }
};
