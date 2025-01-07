# React Native FlatList: Duplicate Keys Bug

This repository demonstrates a common yet easily missed bug in React Native's FlatList component: using duplicate keys for list items.  Duplicate keys can lead to unpredictable rendering behavior, making debugging challenging.

## The Problem

The `FlatList` component in React Native relies on unique keys to efficiently update and render its items.  If multiple items share the same key, unexpected behavior, including missing or duplicated items and inconsistent updates, can result.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npx react-native run-android` (or `npx react-native run-ios`).
4. Observe the inconsistent rendering of the list items.  The items may appear duplicated, missing, or in the wrong order.

## Solution

The solution is to ensure each item in the data array has a unique key. The key should ideally be a stable, unique identifier for each item (like a database ID).  If no suitable ID exists, you can generate one using a library like `uuid`. 

## Fixing the bug

The solution is to ensure that the `keyExtractor` function in the FlatList component returns a unique key for each item.  The provided `DuplicateKeysSolution.js` demonstrates this fix.

This example highlights the importance of using unique keys in your data when working with React Native's `FlatList`.