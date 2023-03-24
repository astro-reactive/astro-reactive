---
title: FormGroup
type: class
package: '@astro-reactive/form'
description: The FormGroup class represents a group of controls that will be rendered as a fieldset element in a form.
layout: ../../../../layouts/MainLayout.astro
---

The `FormGroup` class represents a group of controls that will be rendered as a fieldset element in a form.

> **❗ Note:** This documentation is incomplete.

## Properties

| Property                  | Type            |          |
| ------------------------- | --------------- | -------- |
| [controls](#controls)     | `FormControl[]` | required |
| [formConfig](#formConfig) | `FormConfig`    | optional |

### controls

### formConfig

| Property              | Type              |          |
| --------------------- | ----------------- | -------- |
| [name](#)             | `string`          | optional |
| [validationSchema](#) | `ResolvedField` | optional |

####

## Methods

| Method        | Parameters   | Returns      |            |
| ------------- | ------------ | ------------ | ---------- |
| [get](#get)   | name: string | `FormControl | undefined` |
| [name](#name) | `string`     | optional     |            |
