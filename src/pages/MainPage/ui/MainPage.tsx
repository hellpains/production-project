import React from 'react';
import {useTranslation} from "react-i18next";

type MainPageProps = {}
const MainPage = (props: MainPageProps) => {
   const {t} = useTranslation('main')
   return (
      <div>
         {t("Главная страница")}
      </div>
   );
};
export default MainPage