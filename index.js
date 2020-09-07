const menu = [
  {
    name: "Пункт 1",
    submenu: [
      { name: "Пункт 1.1" },
      { name: "Пункт 1.2" },
      {
        name: "Пункт 1.3",
        submenu: [{ name: "Пункт 1.3.1" }, { name: "Пункт 1.3.2" }],
      },
    ],
  },
  {
    name: "Пункт 2",
  },
  {
    name: "Пункт 3",
    submenu: [
      { name: "Пункт 3.1" },
      { name: "Пункт 3.2" },
      { name: "Пункт 3.3" },
      { name: "Пункт 3.4" },
    ],
  },
];

const displayMenu = (menu) => {
  const menuNode = document.querySelector(".menu");
  menu.forEach((el) => {
    const menuItem = document.createElement("li");
    menuItem.classList.add("menu__item");
    menuItem.innerHTML = el.name;
    menuNode.append(menuItem);
  });
};

// const displaySubmenu = (submenu, menuItemNode) => {
//   submenu.forEach((el) => {
//     menuItemNode.innerHTML += `<li class="submenu__item">${el.name}</li>`;
//   });
// };

displayMenu(menu);
