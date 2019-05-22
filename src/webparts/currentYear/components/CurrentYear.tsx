import * as React from 'react';

import { DynamicProperty } from '@microsoft/sp-component-base';


export interface ICurrentYearProps {
  year: DynamicProperty<string>;
}

export default class CurrentYear extends React.Component<ICurrentYearProps, {}> {
  public render(): React.ReactElement<ICurrentYearProps> {

    const content: any = [
      { experiencia: "Jogador", descricao: "A única área que eu acho, que vai exigir muita atenção nossa, e aí eu já aventei a hipótese de até criar um ministério. É na área de... Na área... Eu diria assim, como uma espécie de analogia com o que acontece na área agrícola.", ano: "2016" },
      { experiencia: "Desenvolvedor", descricao: "Todos as descrições das pessoas são sobre a humanidade do atendimento, a pessoa pega no pulso, examina, olha com carinho. Então eu acho que vai ter outra coisa, que os médicos cubanos trouxeram pro brasil, um alto grau de humanidade.", ano: "2017" },
      { experiencia: "Lider", descricao: "Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar, então é... é... Já vivi muito sem dinheiro, já vivi muito com dinheiro. -Jornalista: Coloca esse dinheiro na poupança que a senhora ganha R$10 mil por mês. -Dilma: O que que é R$10 mil?", ano: "2018" },
      { experiencia: "Aposentado", descricao: "A população ela precisa da Zona Franca de Manaus, porque na Zona franca de Manaus, não é uma zona de exportação, é uma zona para o Brasil. Portanto ela tem um objetivo, ela evita o desmatamento, que é altamente lucravito. Derrubar arvores da natureza é muito lucrativo!", ano: "2019" }
    ];

    let dataValue = this.props.year.tryGetValue();

    let yearContent = content.filter((item: any): any => {
      return item.ano == dataValue;
    });

    return (
      <div>
        <h2>Content from {dataValue}</h2>
        {
          yearContent.length > 0 &&
          yearContent.map((item: any): JSX.Element => {
            return (
              <div>
                <h5>{item.experiencia}</h5>
                <p>{item.descricao}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}
