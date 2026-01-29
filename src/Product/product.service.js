const prisma = require("../../db");

const getAllProducts = async ({ page = 1, perPage = 25, search } = {}) => {
  const skip = (page - 1) * perPage;

  const where = search
    ? {
        OR: [
          { product_name: { contains: search, mode: "insensitive" } },
          { category: { category_name: { contains: search, mode: "insensitive" } } },
        ],
      }
    : undefined;

  const [items, total] = await Promise.all([
    prisma.product.findMany({
      where,
      skip,
      take: perPage,
      include: { category: true },
    }),
    prisma.product.count({ where }),
  ]);

  const lastPage = Math.ceil(total / perPage);

  return {
    pagination: {
      last_visible_page: lastPage,
      has_next_page: page < lastPage,
      current_page: page,
      items: {
        count: items.length,
        total,
        per_page: perPage,
      },
    },
    data: items,
  };
};

const getProductById = async (id) => {
  return prisma.product.findUnique({
    where: { id: Number(id) },
    include: { category: true },
  });
};

const createProduct = async (data) => {
  // Ensure numeric fields are passed as numbers to Prisma
  const payload = {
    product_name: data.product_name,
    image: data.image,
  };

  if (data.price !== undefined) {
    // Accept strings or numbers, coerce to Float
    payload.price = Number(data.price);
  }

  if (data.category_id !== undefined) {
    // category_id likely an integer in the DB
    payload.category_id = Number(data.category_id);
  }

  return prisma.product.create({
    data: payload,
  });
};

const updateProduct = async (id, data) => {
  // Coerce numeric fields in update payload as well
  const updateData = { ...data };
  if (updateData.price !== undefined)
    updateData.price = Number(updateData.price);
  if (updateData.category_id !== undefined)
    updateData.category_id = Number(updateData.category_id);

  return prisma.product.update({
    where: { id: Number(id) },
    data: updateData,
  });
};

const deleteProduct = async (id) => {
  return prisma.product.delete({
    where: { id: Number(id) },
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
