interface IProps {
  color: string;
}

export const IconPassword = ({ color }: IProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 16C2 13.172 2 11.757 2.879 10.879C3.757 10 5.172 10 8 10H16C18.828 10 20.243 10 21.121 10.879C22 11.757 22 13.172 22 16C22 18.828 22 20.243 21.121 21.121C20.243 22 18.828 22 16 22H8C5.172 22 3.757 22 2.879 21.121C2 20.243 2 18.828 2 16Z"
        stroke={color}
      />
      <path
        d="M6 10V8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8V10"
        stroke={color}
        strokeLinecap="round"
      />
      <path
        d="M8 16H8.009M11.991 16H12M15.991 16H16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
