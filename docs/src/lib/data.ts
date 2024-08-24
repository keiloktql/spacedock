export const FAQ_DATA = [
  {
    heading: "General",
    contents: [
      {
        id: "SHT8M",
        qns: "testqns1",
        ans: `testans1`
      },
      {
        id: "7KXF9",
        qns: "testqns2",
        ans: `testans2`
      }
    ]
  }
];

export const COMMAND_MENU_DATA = {
  mainNav: [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "FAQ",
      href: "/faq"
    },
    {
      title: "Terms and Condition",
      href: "/terms-and-condition"
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy"
    }
  ],
  faqNav: [
    {
      title: "FAQ",
      items: (() => {
        const newItemsArr: Array<{
          title: string;
          href: string;
          items: [];
        }> = [];
        FAQ_DATA.forEach((oneFAQSection) =>
          oneFAQSection.contents.forEach((oneFAQ) =>
            newItemsArr.push({
              title: oneFAQ.qns,
              href: `/faq#${oneFAQ.id}`,
              items: []
            })
          )
        );
        return newItemsArr;
      })()
    }
  ]
};
