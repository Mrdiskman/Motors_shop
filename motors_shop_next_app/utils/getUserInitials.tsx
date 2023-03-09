const getUserInitials = (name: string) =>
  name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("")
    .substring(0, 2);

export default getUserInitials;
