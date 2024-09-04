import React from "react";

const InvoiceActions: React.FC = () => {
  const actions = [
    {
      title: "Create New Invoice",
      description: "Create new invoices easily",
      bgColor: "bg-customBlue",
      textColor: "text-white",
      titleColor: "text-[#FFFFFF]",
      descriptionColor: "text-[#F6F8FA]",
      imgSrc: "/images/moneydollar.svg",
      filter: "",
    },
    {
      title: "Change Invoice Settings",
      description: "Customize your invoices",
      bgColor: "bg-white",
      textColor: "text-black",
      titleColor: "text-[#373B47]",
      descriptionColor: "text-[#697598]",
      imgSrc: "/images/setting.png",
      filter:
        "invert(53%) sepia(0%) saturate(0%) hue-rotate(182deg) brightness(94%) contrast(89%)",
    },
    {
      title: "Manage Customer List",
      description: "Add and remove customers",
      bgColor: "bg-white",
      textColor: "text-black",
      titleColor: "text-[#373B47]",
      descriptionColor: "text-[#697598]",
      imgSrc: "/images/user.png",
      filter:
        "invert(53%) sepia(0%) saturate(0%) hue-rotate(182deg) brightness(94%) contrast(89%)",
    },
  ];

  return (
    <div>
      <p className="text-lg sm:text-xl xl:text-[20px] font-[500] mb-4 sm:mb-6">
        Invoice Actions
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-6 sm:mb-8 xl:mb-10">
        {actions.map((action, index) => (
          <div
            key={index}
            className={`${action.bgColor} p-4 sm:p-5 xl:p-6 ${action.textColor} text-center rounded-[24px] h-auto min-h-[10rem] sm:min-h-[12rem] flex flex-col justify-center items-start gap-2`}
          >
            <img
              src={action.imgSrc}
              className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] xl:w-[70px] xl:h-[70px]"
              alt="icon"
              style={action.filter ? { filter: action.filter } : undefined}
            />
            <h3 className={`text-base sm:text-lg xl:text-[22px] ${action.titleColor} font-[500]`}>
              {action.title}
            </h3>
            <p className={`text-sm xl:text-[14px] font-[200] ${action.descriptionColor}`}>
              {action.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoiceActions;

