import { FieldProps } from "formik";

export interface ISelected {
  selected: boolean;
}

export interface IProduct {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  category?: string;
  city?: string;
  isFavorite: boolean;
  images?: string[];
  description: string;

  guarantee?: string;
  quantity: number;
  date: string;
  diagonal?: string;
  memory?: string;
  targetGender?: string;
}

export interface IBorderedButtonProps {
  type?: "submit" | "button";
  onClick?: () => void;
  children?: React.ReactNode;
  disabled: boolean;
  color?: string;
}

export interface Phone {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  category?: string;
  city?: string;
  isFavorite: boolean;
  images?: string[];
}

export interface Notebook {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  category?: string;
  city?: string;
  isFavorite: boolean;
  images?: string[];
}

export interface Technique {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  category?: string;
  city?: string;
  isFavorite: boolean;
  images?: string[];
}

export interface Toys {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  category?: string;
  city?: string;
  isFavorite: boolean;
  images?: string[];
}

export interface Homeandyard {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  category?: string;
  city?: string;
  isFavorite: boolean;
  images?: string[];
}

export type Product = Phone | Notebook | Technique;

export interface ProductsState {
  isLoading: boolean;
  isError: string | null;
  phones: Phone[];
  notebooks: Notebook[];
  techniques: Technique[];
  homeandyard: Homeandyard[];
  toys: Toys[];
  selectedProduct: Product | null;
}

export interface ITextFieldTitleProps {
  text: string;
  color?: string;
}

export interface ITextFieldParagraphProps {
  text: string;
  color?: string;
  underline?: boolean;
  weight?: string;
}

export interface ITextFieldHeaderProps {
  text: string;
  color?: string;
}

export interface ITextFieldAlternativeProps {
  text: string;
  color?: string;
}

export interface ISeeAllProps {
  path: string;
}

export interface ITeqhniques {
  techniques: IProduct[];
}

export interface IToys {
  toys: IProduct[];
}

export interface IHomeandYard {
  homeandyard: IProduct[];
}

export interface ISliderItem {
  id: number;
  title: string;
  desc: string;
  imageUrl: string;
  bgColor: string;
  color: string;
}

export interface ISliderItemProps {
  item: ISliderItem;
}

export interface IPhoneProps {
  phones: IProduct[];
}

export interface IOfferFromDilyProps {
  notebooks: IProduct[];
}

export interface IProductsTopProducts {
  currentData: IProduct[];
  isListView2: boolean;
  setIsListView2: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HeaderProps {
  currentData: IProduct[];
  isListView2: boolean;
  setIsListView2: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IsingleProductProps {
  product: IProduct;
}

export interface ImageSliderProps {
  images: string[];
}

export interface IHeaderBottomProps {
  toggleModal: () => {};
  isModalOpen: boolean;
}

export interface IInputProps extends FieldProps {
  placeholder?: string;
  type?: "text" | "number" | "password";
}

export interface IInputWithLabelProps extends FieldProps {
  label: string;
  placeholder?: string;
  type?: "text" | "number" | "password";
  isRequired?: boolean;
  text: string;
  index: number;
}

export interface IButtonProps {
  type?: "submit" | "button";
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  bgColor?: string;
  color?: string;
}

export interface ICards {
  mockData: IProduct[];
}

export interface ICardItemProps {
  item: {
    id: string;
    imageUrl: string;
    title: string;
    price: string;
    category?: string;
    city?: string;
    isFavorite: boolean;
    images?: string[];
  };
}
