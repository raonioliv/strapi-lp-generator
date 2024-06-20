import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'Menu_link';
    icon: 'link';
  };
  attributes: {
    link_text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    open_in_new_tab: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'Menu';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    logo_link: Attribute.Text & Attribute.Required;
    logo_text: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    logo: Attribute.Media;
    menu_links: Attribute.Component<'menu.menu-link', true> &
      Attribute.Required;
  };
}

export interface Section2ColsMobile2Rows extends Schema.Component {
  collectionName: 'components_section_2cols_mobile_2rows';
  info: {
    displayName: '2cols_mobile_2rows';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Lorem Ipsum Dolor'>;
    description: Attribute.Text;
    image: Attribute.Media;
    metadata: Attribute.Component<'section.session-metadata'> &
      Attribute.Required;
  };
}

export interface SectionImageGrid extends Schema.Component {
  collectionName: 'components_section_image_grids';
  info: {
    displayName: 'image-grid';
    icon: 'apps';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SectionSectionContent extends Schema.Component {
  collectionName: 'components_section_section_contents';
  info: {
    displayName: 'section_content';
    icon: 'discuss';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    richText: Attribute.Blocks & Attribute.Required;
    metadata: Attribute.Component<'section.session-metadata'> &
      Attribute.Required;
  };
}

export interface SectionSectionGrid extends Schema.Component {
  collectionName: 'components_section_section_grids';
  info: {
    displayName: 'section_grid';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    description: Attribute.Text & Attribute.Required;
    text_grid: Attribute.Component<'section.text-grid', true>;
    image_grid: Attribute.Component<'section.image-grid', true>;
    metadata: Attribute.Component<'section.session-metadata'> &
      Attribute.Required;
  };
}

export interface SectionSessionMetadata extends Schema.Component {
  collectionName: 'components_section_session_metadata';
  info: {
    displayName: 'section_metadata';
    icon: 'write';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    sectionID: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 50;
      }>;
    hasBackground: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SectionTextGrid extends Schema.Component {
  collectionName: 'components_section_text_grids';
  info: {
    displayName: 'text-grid';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    description: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.menu-link': MenuMenuLink;
      'menu.menu': MenuMenu;
      'section.2cols-mobile-2rows': Section2ColsMobile2Rows;
      'section.image-grid': SectionImageGrid;
      'section.section-content': SectionSectionContent;
      'section.section-grid': SectionSectionGrid;
      'section.session-metadata': SectionSessionMetadata;
      'section.text-grid': SectionTextGrid;
    }
  }
}
