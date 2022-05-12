/* Este método pode ser usando para autenticação pelo fato do Switch não ter o Goback
assim atrazendo segurança aó login, ou direcionando o usuário a página específica como 
por exemplo a opção de esqueci senha ou fazer cadastro.*/

import React from 'react';
import {createAppContainer, createSwitchNavigator,} from 'react-navigation';

import StackRouter from '../Stack/stack.routes'
import TabRouter from '../Tabs/tabs.routes'

import Example from '../../../Example';


const Switch = createSwitchNavigator({
  Loading: {
    screen: Example,
  },
  Auth: {
    screen: StackRouter,
  },
  App: {
    screen: TabRouter,
  },
});

 const Router = createAppContainer(Switch);


export default function SwitchRouter() {

  return (  
      <Router/>  
  );
}