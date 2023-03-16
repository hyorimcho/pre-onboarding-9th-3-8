import { CATEGORY } from '@/constants/category';
import { ICategoryProps } from '@/interface/props';

const CategoryBtn = ({ category, handleCategory }: ICategoryProps) => {
  return (
    <div className="btn-wrapper">
      {CATEGORY.map((item) => (
        <button
          onClick={handleCategory}
          className={`${item === category ? 'btn-active' : 'btn'}`}
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default CategoryBtn;
