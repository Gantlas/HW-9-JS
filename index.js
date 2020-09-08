// const menu = [
//   {
//     name: "Пункт 1",
//     submenu: [
//       { name: "Пункт 1.1" },
//       { name: "Пункт 1.2" },
//       {
//         name: "Пункт 1.3",
//         submenu: [{ name: "Пункт 1.3.1" }, { name: "Пункт 1.3.2" }],
//       },
//     ],
//   },
//   {
//     name: "Пункт 2",
//   },
//   {
//     name: "Пункт 3",
//     submenu: [
//       { name: "Пункт 3.1" },
//       { name: "Пункт 3.2" },
//       { name: "Пункт 3.3" },
//       { name: "Пункт 3.4" },
//     ],
//   },
// ];

const menu = [
  {
    name: "Пункт 1",
    submenu: [
      { name: "Пункт 1.1" },
      { name: "Пункт 1.2" },
      {
        name: "Пункт 1.3",
        submenu: [
          {
            name: "Пункт 1.3.1",
            submenu: [{ name: "Пункт 1.3.1.1" }, { name: "Пункт 1.3.1.2" }],
          },
          {
            name: "Пункт 1.3.2",
            submenu: [{ name: "Пункт 1.3.2.1" }, { name: "Пункт 1.3.2.2" }],
          },
        ],
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

    if (el.submenu) {
      menuItem.addEventListener("mouseenter", () => {
        displaySubmenu(menuItem, el.submenu);
      });

      menuItem.addEventListener("mouseleave", () => {
        hideSubmenu(menuItem);
      });
    }
  });
};

const displaySubmenu = (itemNode, submenu) => {
  const submenuNode = document.createElement("ul");
  submenuNode.classList.add("submenu");
  itemNode.append(submenuNode);

  if (itemNode.closest(".submenu")) {
    submenuNode.style.left = "calc(100% + 1px)";
    submenuNode.style.top = "-4px";
  }

  submenu.forEach((el) => {
    const submenuItem = document.createElement("li");
    submenuItem.classList.add("submenu__item");
    submenuItem.innerHTML = el.name;
    submenuNode.append(submenuItem);

    if (el.submenu) {
      submenuItem.addEventListener("mouseenter", () => {
        displaySubmenu(submenuItem, el.submenu);
      });

      submenuItem.addEventListener("mouseleave", () => {
        hideSubmenu(submenuItem);
      });
    }
  });
};

const hideSubmenu = (itemNode) => {
  itemNode.querySelector(".submenu").remove();
};

displayMenu(menu);
