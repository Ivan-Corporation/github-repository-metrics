[![NPM](https://img.shields.io/npm/v/repository-metrics.svg)](https://www.npmjs.com/package/repository-metrics)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![NPM](https://img.shields.io/npm/l/repository-metrics)
![npm](https://img.shields.io/npm/dm/repository-metrics)
![GitHub stars](https://img.shields.io/github/stars/Ivan-Corporation/github-repository-metrics?style=social)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/repository-metrics)


# Repository metrics for ```react``` ![image](https://user-images.githubusercontent.com/58357980/163430798-92917757-e75e-446e-ae15-6526b62b6c1a.png)



## This beauty and easy ``(4KB)`` react component can help you ``add metrics`` to your repositories also you can ```change component theme on light/dark```
----
## Install:
```bash
npm i repository-metrics
---
yarn add repository-metrics
```

## Usage:
```jsx
// don't forget change props
import { RepositoryMetrics } from 'repository-metrics';

const App = () => {
  return (
    <div>
      <RepositoryMetrics 
      owner='Ivan-Corporation' 
      repo='Komolio' 
      theme='light' 
      />

      <RepositoryMetrics 
      owner='Ivan-Corporation' 
      repo='3D-Planet-destroyer' 
      theme='dark' 
      />
    </div>
  );
};
```



## Examples:
---

<img src='./2.png'>
<img src='./1.png'>

## Check demo here:
### https://komolio.netlify.app/projects


---
## Props:

| props  | required | default  | description |
| ------------- | ------------- | ------------- | ------------- |
| owner(string)| yes | - | your github account username |
| repo(string) | yes | - | your repository name|
| theme(string) | yes | - | theme for component (light/dark) |
