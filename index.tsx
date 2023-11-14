"use client";

import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import cx from "classnames";
import * as styles from "./BaseIcon.css";
import * as Icons from "./generated";

function getA11yProps(title?: string) {
  if (title) {
    return {
      role: "img",
      "aria-label": title,
    };
  }
  return {
    "aria-hidden": true,
  };
}

/**
 * @public
 * @name BaseIcon
 * @system-props color, common
 */
export interface OwnBaseIconProps extends Color, Common {
  /**
   * Only takes translated content, no markup
   */
  title?: string;
  /**
   * A string of classnames to add to the icon for styling
   */
  className?: string;
  /**
   * Inner markup for each icon
   */
  children?: ReactNode;
  /**
   * Allow alternate render modes for advanced use
   */
  mode?: "inline-svg" | "define-sprite" | "use-sprite";
  /**
   * Variable line-weights on a per-brand basis (incompatible with deprecated icons)
   */
  scalable?: boolean;
  /**
   * When rendering as or referring to an SVG sprite, a sprite reference id is required
   */
  spriteId?: string;
  /**
   * Docs for this prop can be found in
   * `site/src/components/PropDocs/commonProps.ts`.
   */
  testIds?: Record<string, string>;
}

export interface BaseIconProps
  extends OwnBaseIconProps,
    Omit<ComponentPropsWithoutRef<"svg">, keyof OwnBaseIconProps> {}

export type IconProps = Omit<BaseIconProps, "scalable">;

function BaseIcon({
  title,
  className,
  children,
  testIds,
  mode = "inline-svg",
  spriteId,
  scalable,
  ...props
}: BaseIconProps) {
  invariant.log(
    /(define|use)-sprite/.test(mode) ? !!spriteId : true,
    "a `spriteId` is required when using define-sprite or use-sprite render modes",
    "Icon"
  );

  // Provide an alternate render mode for use within a local icon sprite
  if (mode === "define-sprite") {
    return (
      <symbol
        {...rest}
        id={spriteId}
        data-hb-id="pl-icon-symbol"
        {...generateTestIds({ testIds })}
      >
        {title && <title>{title}</title>}
        {children}
      </symbol>
    );
  }

  const classes = cx(
    styles.base,
    !!scalable && !!themeId && styles.scalableStrokeVariants[themeId],
    className
  );
  // Provide an alternate render mode for referencing an already defined svg symbol
  if (mode === "use-sprite") {
    return (
      <Element
        is="svg"
        focusable="false"
        {...systemProps}
        {...rest}
        className={classes}
        // Not overridable via endpoint, used to enforce consistent accessibility attributes
        // https://www.w3.org/TR/UNDERSTANDING-WCAG20/complete.html#text-equiv-all
        {...getA11yProps(title)}
        // This is technically the entry point for all v2 icons
        data-hb-id="pl-icon-use"
        testIds={testIds}
      >
        <use xlinkHref={"#" + spriteId} />
      </Element>
    );
  }
  // render as an inline svg by default
  return (
    <Element
      is="svg"
      focusable="false"
      {...systemProps}
      {...rest}
      className={classes}
      // Not overridable via endpoint, used to enforce consistent accessibility attributes
      // https://www.w3.org/TR/UNDERSTANDING-WCAG20/complete.html#text-equiv-all
      {...getA11yProps(title)}
      // This is technically the entry point for all v2 icons
      data-hb-id="pl-icon"
      testIds={testIds}
    >
      {title && <title>{title}</title>}
      {children}
    </Element>
  );
}
