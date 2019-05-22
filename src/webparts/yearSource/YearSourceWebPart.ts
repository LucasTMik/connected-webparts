import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import YearSource, { IYearSourceProps } from './components/YearSource';

import { IDynamicDataCallables, IDynamicDataPropertyDefinition } from '@microsoft/sp-dynamic-data';

export interface IYearSourceWebPartProps {

}

export default class YearSourceWebPart extends BaseClientSideWebPart<IYearSourceWebPartProps> implements IDynamicDataCallables {

  private _year: string;

  public _handleYearChange = (newYear: string): void => {
    // store the currently selected year in the class variable. Required
    // so that connected component will be able to retrieve its value
    this._year = newYear;

    // notify subscribers that the selected event has changed
    this.context.dynamicDataSourceManager.notifyPropertyChanged('year');
  }


  public render(): void {
    const element: React.ReactElement<IYearSourceProps> = React.createElement(
      YearSource,
      {
        onchange: this._handleYearChange
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    // register this web part as dynamic data source
    this.context.dynamicDataSourceManager.initializeSource(this);
    return Promise.resolve();
  }

  //Return the current value of the specified dynamic data set
  public getPropertyValue(): string {
    return this._year;
  }

  /**
 * Return list of dynamic data properties that this dynamic data source
 * returns
 */
  public getPropertyDefinitions(): ReadonlyArray<IDynamicDataPropertyDefinition> {
    return [
      {
        id: 'year',
        title: 'YearSource'
      }
    ]
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
