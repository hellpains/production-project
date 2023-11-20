import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Компонента для тестирования
export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);
  const { t } = useTranslation();
  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <Button
      onClick={onThrow}
    >
      {t('Выдать ошибку')}
    </Button>
  );
};
