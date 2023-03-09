export const timeDifference = (created_at: string) => {
  const today = new Date();
  const time = new Date(created_at);
  const month = Math.floor((today - time) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((today - time) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((today - time) / (1000 * 60 * 60));
  const minutes = Math.floor((today - time) / (1000 * 60));
  const seconds = Math.floor((today - time) / 1000);
  if (days >= 1) {
    if (days == 1) {
      return "ontem";
    }
    if (days < 30) {
      return `há ${days} dias`;
    }
    if (month == 1) {
      return `há 1 mês`;
    }
    return `há ${month} meses`;
  }
  if (hours >= 1) {
    if (hours == 1) {
      return "há 1 hora";
    }
    return `há ${hours} horas`;
  }
  if (minutes >= 1) {
    if (minutes == 1) {
      return "há 1 minuto";
    }
    return `há ${minutes} minutos`;
  }
  return "agora";
};
