import * as React from 'react';

export interface IYearSourceProps {
  onchange: (newYear: string) => void;
}

export default class YearSource extends React.Component<IYearSourceProps, {}> {
  public render(): React.ReactElement<IYearSourceProps> {

    const years: string[] = [
      '2016',
      '2017',
      '2018',
      '2019',
    ]

    return (
      <div className={"Todos"}>
        <h3>Year</h3>

        <select onChange={(e) => this.props.onchange(years[e.target.value])} >
          {
            years.map((year: string, index: number): JSX.Element => {
              return(
                <option key={index} value={index}>{year}</option>
              );
            })
          }
        </select>

      </div>
    );
  }
}
