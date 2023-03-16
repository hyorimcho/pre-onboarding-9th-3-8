import { IDistrictProps } from '@/interface/props';

const DistrictBtn = ({
  chartDistrict,
  district,
  handleDistrict,
}: IDistrictProps) => {
  return (
    <div>
      <div className="btn-wrapper">
        <button
          onClick={() => handleDistrict('전체')}
          className={`${district === '전체' ? 'btn-active' : 'btn'}`}
        >
          전체
        </button>
        {chartDistrict.map((value) => (
          <button
            onClick={(e) =>
              handleDistrict(e.currentTarget.textContent as string)
            }
            className={`${value === district ? 'btn-active' : 'btn'}`}
            key={value}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};
export default DistrictBtn;
