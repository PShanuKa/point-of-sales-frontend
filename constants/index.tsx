import { ReactNode } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { PiCube } from "react-icons/pi";
import { TbCubePlus } from "react-icons/tb";
import { GiIceCube } from "react-icons/gi";
import { FaArrowTrendDown } from "react-icons/fa6";
import { GrCubes } from "react-icons/gr";
import { FaCubesStacked } from "react-icons/fa6";
import { FiTag } from "react-icons/fi";
import { CgNametag } from "react-icons/cg";
import { RiPriceTagLine } from "react-icons/ri";
import { FaBarcode } from "react-icons/fa6";
import { MdOutlineQrCode2 } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

export interface NavLinks {
  label: string;
  route: string;
  icon?: () => ReactNode; // Declare `icon` as a function that returns JSX
  children?: NavLinks[];
}

export const HorizontalNavMainLinks: NavLinks[] = [
  {
    label: 'Dashboard',
    route: '/dashboard',
    icon: () => <MdOutlineDashboard /> // Use a function to return the JSX
  },
];

export const HorizontalNavInventoryLinks: NavLinks[] = [
  {
    label: 'Products',
    route: '/dashboard/products',
    icon: () => <PiCube />
  },
  {
    label: 'Create Products',
    route: '/dashboard/create-product',
    icon: () => <TbCubePlus />
  },
  {
    label: 'Expired Product',
    route: '/dashboard/expired-products',
    icon: () => <GiIceCube />
  },
  {
    label: 'Low Stocks',
    route: '/dashboard/low-stocks',
    icon: () => <FaArrowTrendDown />
  },
  {
    label: 'Category',
    route: '/dashboard/category',
    icon: () => <GrCubes />
  },
  {
    label: 'Sub Category',
    route: '/dashboard/sub-category',
    icon: () => <FaCubesStacked />
  },
  {
    label: 'Brands',
    route: '/dashboard/brands',
    icon: () => <FiTag />
  },
  {
    label: 'Units',
    route: '/dashboard/units',
    icon: () => <CgNametag />
  },
  {
    label: 'Variant Attributes',
    route: '/dashboard/variant-attributes',
    icon: () => <RiPriceTagLine />
  },
  {
    label: 'Warranties',
    route: '/dashboard/warranties',
    icon: () => <FaArrowTrendDown />
  },
  {
    label: 'Print Barcode',
    route: '/dashboard/print-barcode',
    icon: () => <FaBarcode />
  },
  {
    label: 'Print QR Code',
    route: '/dashboard/print-qrcode',
    icon: () => <MdOutlineQrCode2 />
  },
];

export const HorizontalNavStockLinks: NavLinks[] = [
  {
    label: 'Manage Stock',
    route: '/',
    icon: () => <BsBoxSeam />
  },
  {
    label: 'Stock Adjustment',
    route: '/create-products',
    icon: () => <MdEditNote />
  },
  {
    label: 'Stock Transfer',
    route: '/expired-product',
    icon: () => <FaCarSide />
  },
];

export const HorizontalNavPromoLinks: NavLinks[] = [
  {
    label: 'Coupons',
    route: '/',
    icon: () => <BsBoxSeam />
  },
];

export const HorizontalNavPurchasesLinks: NavLinks[] = [
  {
    label: 'Purchases',
    route: '/',
    icon: () => <FiShoppingBag />
  },
  {
    label: 'Purchases Order',
    route: '/',
    icon: () => <FaRegFileAlt />
  },
  {
    label: 'Purchases Return',
    route: '/',
    icon: () => <GiReturnArrow />
  },
];

export const HorizontalNavFinanceAndAccountsLinks: NavLinks[] = [
  {
    label: 'Expenses',
    route: '/dashboard',
    icon: () => <BsBoxSeam />,
    children: [
      {
        label: 'Expenses',
        route: '/'
      },
      {
        label: 'Expenses Category',
        route: '/'
      }
    ]
  },
];

export const HorizontalNavPeopleLinks: NavLinks[] = [
  {
    label: 'Purchases Return',
    route: '/',
    icon: () => <BsBoxSeam />,
    children: [
      {
        label: 'Purchases Return',
        route: '/'
      }
    ]
  },
];
