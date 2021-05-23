import "./avatar-styles.css";

export const Avatar = (props) => {
  const { src, size } = props;
  const classes = `avatar-${size}`;
  return (
    <img
      src={src}
      alt={"profile avatar"}
      className={`${classes} responsive-img float-right`}
    />
  );
};
