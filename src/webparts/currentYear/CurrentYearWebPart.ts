import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IWebPartPropertiesMetadata } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDynamicField,
  PropertyPaneDynamicFieldSet
} from '@microsoft/sp-property-pane';

import * as strings from 'CurrentYearWebPartStrings';
import CurrentYear, { ICurrentYearProps } from './components/CurrentYear';

import { DynamicProperty } from '@microsoft/sp-component-base';

export interface ICurrentYearWebPartProps {
  year: DynamicProperty<string>
}

export default class CurrentYearWebPart extends BaseClientSideWebPart<ICurrentYearWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICurrentYearProps> = React.createElement(
      CurrentYear,
      {
        year: this.properties.year
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }


  protected get propertiesMetadata(): IWebPartPropertiesMetadata {
    return {
      'year': {
        dynamicPropertyType: 'string'
      }
    };
  }


  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          groups: [
            {
              groupFields: [
                PropertyPaneDynamicFieldSet({
                  label: 'Select year source',
                  fields: [
                    PropertyPaneDynamicField('year', {
                      label: 'Year source'
                    })
                  ]
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
