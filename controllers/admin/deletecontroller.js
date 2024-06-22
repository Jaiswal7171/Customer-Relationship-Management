import Category from '../../model/admin/category_m.js';


class Deletecontroller {
    static deleteCategory = async (req, res) => {
        const categoryId = req.query.id;
        try {
            const category = await Category.findByPk(categoryId);
            if (!category) {
                return res.status(404).json({ message: 'Category not found' });
            }
            
            await category.destroy(); // Delete the category found by findByPk

            // Redirect to a route that lists all categories after deletion
            res.redirect('/admin/categories');
        } catch (error) {
            console.error('Error deleting category:', error);
            res.status(500).json({ message: 'Failed to delete category' });
        }
    }
}


export default Deletecontroller;