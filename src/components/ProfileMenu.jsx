import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Fragment, useContext } from "react";
import { useTranslation } from "react-i18next";
import { MdDashboard, MdLogout, MdPassword, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { setUser } from "../api/user";
import UserContext from "../contexts/userContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfileMenu({ setIsChangePasswordOpen }) {
  const userContext = useContext(UserContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const resources = [
    {
      id: 1,
      name: t("dashboard"),
      onClick: () => {
        navigate(
          userContext.user.type ? "/user-dashboard/profile" : "/admin/users"
        );
      },
      icon: MdDashboard,
    },
    {
      id: 2,
      name: t("logout"),
      onClick: () => {
        setUser({});
        userContext.setUser({});
        navigate("/login");
      },
      icon: MdLogout,
    },
  ];

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-dark-blue/90" : "text-dark-blue",
              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-dark-blue/90 focus:outline-none"
            )}
          >
            <MdPerson className="text-lg mr-1" /> <span> {t("account")}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-dark-blue/90" : "text-dark-blue",
                "ml-2 h-5 w-5 group-hover:text-dark-blue/90"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {userContext.user.type === 0 && (
                    <button
                      onClick={() => setIsChangePasswordOpen(true)}
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <MdPassword
                        className="flex-shrink-0 h-6 w-6 text-dark-blue"
                        aria-hidden="true"
                      />
                      <div className="mx-4">
                        <p className="text-base font-medium text-gray-900">
                          Change Password
                        </p>
                      </div>
                    </button>
                  )}
                  {resources.map((item) => (
                    <button
                      key={item.name}
                      onClick={item.onClick}
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-dark-blue"
                        aria-hidden="true"
                      />
                      <div className="mx-4">
                        <p className="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
