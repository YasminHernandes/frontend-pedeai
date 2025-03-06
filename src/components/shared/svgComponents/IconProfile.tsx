interface IProps {
    color: string
}

export const IconProfile = ({ color }: IProps) => {
  return (
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.49996 8.71651C11.7872 8.71651 13.6413 6.98608 13.6413 4.85148C13.6413 2.71688 11.7872 0.98645 9.49996 0.98645C7.21278 0.98645 5.35864 2.71688 5.35864 4.85148C5.35864 6.98608 7.21278 8.71651 9.49996 8.71651Z" stroke={color} strokeLinecap="round"/><path d="M17.5 17.0135C17.0289 15.7806 15.9884 14.6916 14.5421 13.9147C13.0957 13.1378 11.3232 12.7166 9.5 12.7166C7.67678 12.7166 5.9043 13.1378 4.45794 13.9147C3.01158 14.6916 1.97108 15.7806 1.5 17.0135" stroke={color} strokeLinecap="round"/></svg>

  );
};
