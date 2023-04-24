import { v4 as uuidv4 } from "uuid";

export const categories = [
  {
    category: "Зарплата",
    subcategory: null,
    type: "income",
    id: uuidv4(),
  },
  {
    category: "Инвестиции",
    subcategory: "Недвижимость",
    type: "income",
    id: uuidv4(),
  },
  {
    category: "Инвестиции",
    subcategory: "Криптовалюта",
    type: "income",
    id: uuidv4(),
  },
  {
    category: "Инвестиции",
    subcategory: "Вино",
    type: "income",
    id: uuidv4(),
  },
  {
    category: "Зарплата",
    subcategory: null,
    type: "expense",
    id: uuidv4(),
  },
  {
    category: "Питание",
    subcategory: "Продукты",
    type: "expense",
    id: uuidv4(),
  },
  {
    category: "Питание",
    subcategory: "Кафе / Рестораны",
    type: "expense",
    id: uuidv4(),
  },
  {
    category: "Транспорт",
    subcategory: "Авто",
    type: "expense",
    id: uuidv4(),
  },
  {
    category: "Транспорт",
    subcategory: "Такси",
    type: "expense",
    id: uuidv4(),
  },
];

const addCategory = (categoryName, type, subcategoryName = null) => {
  let doesExist = false;

  const newObject = {
    category: categoryName,
    subcategory: subcategoryName,
    type: type,
    id: uuidv4(),
  };
  const { id, ...newInfo } = newObject;
  const newContent = { ...newInfo };

  categories.forEach((category) => {
    const { id, ...oldInfo } = category;
    const oldContent = { ...oldInfo };
    if (JSON.stringify(oldContent) === JSON.stringify(newContent)) {
      doesExist = true;
    }
  });

  if (!doesExist) {
    categories.push(newObject);
  }
};

const deleteCategory = (id) => {
  const searchedIndex = categories.findIndex((category) => category.id === id);
  categories.splice(searchedIndex, 1);
};

const fetchAll = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 1500);
  });

export default {
  fetchAll,
  addCategory,
  deleteCategory,
};
