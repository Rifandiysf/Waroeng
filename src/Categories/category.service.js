const prisma = require("../../db");

const getAllCategories = async () => {
  return prisma.category.findMany({
    include: {
      products: true,
    },
  });
};

const getCategoryById = async (id) => {
  return prisma.category.findUnique({
    where: { id: Number(id) },
    include: { products: true },
  });
};

const createCategory = async (data) => {
  return prisma.category.create({
    data: {
      category_name: data.category_name,
    },
  });
};

const updateCategory = async (id, data) => {
  return prisma.category.update({
    where: { id: Number(id) },
    data,
  });
};

const deleteCategory = async (id) => {
  return prisma.category.delete({
    where: { id: Number(id) },
  });
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
