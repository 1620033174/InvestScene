### 1. 项目概述
- 本项目的主要目的是通过因子分析、算法运行和场景运行等方式，对股票进行研究和分析。
目前本项目的主要功能有因子管理、算法管理、场景管理和股票管理等。但是本项目还有很多不足之处，需要后续的更换技术栈以及重写代码等。
### 2. 原型项目介绍
#### 2.1 项目背景
- 原型项目是一个金融项目，主要由两个前端项目和三个后端项目组成。第一个前端项目名为finance-integration，
使用vue2、element-ui、axios、vuex、vue-router和echarts等技术栈。它主要负责因子管理、算法管理和场景管理等功能。
第二个前端项目名为stock-frontend-main，使用vue2、vuetify、axios、vuex、vue-router和echarts等技术栈，
主要负责股票管理功能。  后端项目包括finance-backend-main和stock-backend-raw-main。
finance-backend-main使用python、flask和mysql等技术栈，
而stock-backend-raw-main则使用rust、mongodb和rocket等技术栈。  
这个项目的主要目标是通过因子分析、算法运行和场景运行等方式，对金融市场进行深入研究和分析
#### 2.2 项目构成

- 项目结构
  - 前端项目(1)：`finance-integration`
    - 技术栈：`vue2` + `element-ui` + `axios` + `vuex` + `vue-router` + `echarts`
    - 项目结构说明：
        - `src`：项目源码
            - `api`：项目接口
            - `layout`：项目布局
            - `styles`：项目样式
            - `assets`：项目静态资源
            - `components`：项目组件
            - `router`：项目路由
            - `store`：项目状态管理
            - `utils`：项目工具类
            - `views`：项目页面
            - `App.vue`：项目入口
            - `main.js`：项目入口
            - `permission.js`：项目权限
        - `public`：项目公共资源
        - `package.json`：项目依赖
        - `vue.config.js`：项目配置  
      具体参考：[模板官方文档](https://panjiachen.gitee.io/vue-element-admin-site/zh/)
    - 项目功能
      - 因子管理
        - 因子列表
        - 因子详情
        - 因子分析
      - 算法管理
        - 算法列表
        - 算法详情
        - 算法分析
        - 算法运行
        - 回测
      - 场景管理
        - 场景列表
        - 场景详情
        - 场景分析
        - 场景运行
        - 查看场景
    - 项目接口
       - `/lwz/algorithms` :
         - `/lwz/algorithm/get` : 通过id获取算法 `get`
         - `/lwz/algorithm/all` : 获取所有算法 `get`
         - `/lwz/algorithm/list` : 获取算法列表 `get`
         - `/lwz/algorithm/save` : 添加算法 `post`
         - `/lwz/algorithm/update` : 更新算法 `post`
         - `/lwz/algorithm/deleteAlgorithmById/{id}` : 删除算法 `delete`
         - `/lwz/algorithm/getAlgorithmByPage` : 分页获取算法 `get`
         - `/lwz/algorithm/file/get` : 通过id获取算法文件 `get`
         - `/lwz/algorithm/file/getZonghe` : 获取综合选股算法文件 `get`
         - `/lwz/algorithm/file/runZonghe` : 运行综合选股算法文件 `get`
         - `/lwz/algorithm/file/run` : 运行算法文件 `get`
         - `/lwz/algorithm/file/createZonghe` : 创建综合选股算法文件 `post`
         - `/lwz/algorithm/file/create` : 创建算法文件 `post`
         - `/lwz/algorithm/file/update` : 更新算法文件 `post`
         - `/lwz/algorithm/file/updateZonghe` : 更新综合选股算法文件 `post`
       - `/lwz/factor` : 
         - `/lwz/factors/group` : 通过id获取因子 `get`
         - `/lwz/factors/getAllFactors` : 获取所有因子 `get`  
       - `/hz/results` : 
         -  `/hz/results/getFactorsInfo` : 获取因子信息 `get`
         -  `/hz/results/getFactorsData` : 获取因子数据 `get`
         - `/hz/results/getCorrelationFactors` : 获取相关因子 `get`
       - `/hz/factor` :
         - `/hz/factor/update` : 更新因子 `post`
         - `/hz/factor/deleteById/{id}` : 删除因子 `delete`
         - `/hz/factor/add` : 添加因子 `post`
         - `/hz/factor/getByPage` : 分页获取因子 `get`
       - `/hz/detail` :
         - `/hz/detail/getMin` : 获取最小值 `get`
         - `/hz/detail/getMax` : 获取最大值 `get`
         - `/hz/detail/getVariancePic` : 获取方差图 `get`
         - `/hz/detail/getQuantilePic` : 获取分位数图 `get`
       - `/scene` :
         - `/scene/getByPage` : 分页获取场景 `get`
         - `/scene/add` : 添加场景 `post`
         - `/scene/updateById` : 更新场景 `post`
         - `/scene/getById/{id}` : 通过id获取场景 `get`
         - `/scene/deleteById/{id}` : 通过id删除场景 `delete`
         - `/scene/getStockDataById` : 通过id获取场景股票数据 `get`
         - `/scene/showStock` : 展示场景股票数据 `get`
       - `/stock` :
         - `/stock/getSimulatedStock` : 获取模拟股票数据 `post`
         - `/stock/getStockList` : 获取股票列表 `post`
  - 前端项目(2)：`stock-frontend-main`
    - 技术栈：`vue2` + `vuetify` + `axios` + `vuex` + `vue-router` + `echarts`
    - 项目结构说明
      - `src`：项目源码
        - `api`：项目接口
        - `assets`：项目静态资源
        - `scss`：项目样式
        - `components`：项目组件
        - `layouts`：项目布局
        - `config`：项目配置
        - `plugins`：项目插件
        - `router`：项目路由
        - `store`：项目状态管理
        - `utils`：项目工具类
        - `views`：项目页面
        - `App.vue`：项目入口
        - `main.js`：项目入口
        - `babel.config.js`：项目配置
        - `vue.config.js`：项目配置
        - `permission.js`：项目权限
    - 项目功能:
      - 股票管理
        - 股票列表
        - 股票详情
        - 股票对比
        - 股票分析
    - api接口：
        - `/about/{id}` : 通过id获取股票详情 `get`
        - `/chat` : 聊天接口 `post
        - `/stock_id/{stock_name}`: 通过股票名称获取股票id `get`
        - `/compare/{id}`: 通过id获取股票对比数据 `get`
        - `/factor/{factor}/{id}`: 通过id获取因子数据 `get`
        - `/historyTime/{id}` : 通过id获取历史时间 `get`
        - `/most_similar/{id}/{time}` : 通过id和时间获取最相似股票 `get`
        - `/{type}/{id}`: 通过id和类型获取股票数据 `get`
        - `/compare/{id}/{time}` : 通过id和时间获取股票对比数据 `get`
        - `/klines/{id}/{time}` : 通过id和时间获取股票k线数据 `get`
        - `/stocks/{filter}` : 通过筛选条件获取股票列表 `get`
        - `/filters` : 获取筛选条件 `get`
        - `/title` : 获取股票标题 `get`
        - `/title` : 存储标题 `post`
        - `/related/{id}/{time}` : 通过id和时间获取相关股票 `get`
        - `/unrelated/{id}/{time}` : 通过id和时间获取不相关股票 `get`
  - 后端项目(1)：`finance-backend-main`
    - 技术栈：`springboot` + `mysql` + `mybatis-plus` 
    - 项目结构说明
      - src : 项目源码
        - main : 项目主要代码
          - java : 项目java代码
            - com : 项目主要代码
              - finance : 项目主要代码
                - controller : 项目控制器
                - mapper : 项目数据访问层
                - entity : 项目实体类
                - service : 项目服务层
                - FinanceApplication.java : 项目入口
          - resources : 项目资源
            - static : 项目静态资源
            - templates : 项目模板
            - application.yml : 项目配置
      - 数据库：
        - 数据库：finance_all
- 表:
  algorithm(算法表)

| 字段名 | 类型 | 解释 |
| --- | --- | --- |
| id | int | 算法id |
| name | varchar | 算法名称 |
| algorithm_description | varchar | 算法描述 |
| algorithm_file_path | varchar | 算法文件名称 |
| type | int | 算法类型（1是条件选股，2是综合选股） |
| logic_description | varchar | 算法逻辑描述 |
| status | varchar | 算法状态（todo|done） |
| created_at | datetime | 算法创建时间 |
| author | varchar | 作者名称 |

algorithm_factor1（条件选股算法-因子关联表）

| 字段名 | 类型 | 解释 |
| --- | --- | --- |
| id | int | id |
| factor_id | int | 因子表factor_hz的id |
| algorithm_id | int | 算法algorithm表的id |
| logic | varchar | 算法逻辑描述（大于|小于|大于等于|小于等于|等于）value的值 |
| value | varchar | 值 |
| is_top | int | 是否从高到底取 |
| choice_type | int | （0百分比|1数字|2大于小于） |

algorithm_factor2（综合选股算法-因子关联表）

| 字段名 | 类型 | 解释 |
| --- | --- | --- |
| id | int | id |
| factor_id | int | 因子表factor_hz的id |
| algorithm_id | int | 算法algorithm表的id |

factor_hz(因子表)

| 字段名 | 类型 | 解释 |
| --- | --- | --- |
| id | int | 因子id |
| name | varchar | 因子中文名称 |
| type | varchar | 因子类型 |
| formula | varchar | 因子公式 |
| description | varchar | 因子描述 |
| name_us | varchar | 因子英文名称 |
| default_value | double | 默认值 |
| max_value | double | 最大值 |
| min_value | double | 最小值 |
| accuracy | double | 精确度 |

scene(场景表)

| 字段名 | 类型 | 解释 |
| --- | --- | --- |
| id | int | 场景id |
| scene_name | varchar | 场景名称 |
| theme | varchar | 场景主题 |
| description | varchar | 场景描述 |
| tags | varchar | 场景标签 |
| stock_list | text | 场景对应股票池 |
| date | varchar | 日期 |

scene_ algorithm（场景-算法关联表）

| 字段名 | 类型 | 解释 |
| --- | --- | --- |
| id | int | id |
| scene_id | int | 场景scene表的id |
| algorithm_id | int | 算法algorithm表的id |

stock(股票表)

| 字段名 | 类型 | 解释 |
| --- | --- | --- |
| id | int | id |
| code | varchar | 股票代码 |
| stock_name | varchar | 股票中文名称 |
| pubdate | varchar | 股票发布日期 |
| date | varchar | 股票发布截至日期 |
| factor_name | varchar | 因子名称 |
| factor_value | varchar | 因子值 |
  - 后端项目(2)：`finance-backend-main`
    - 技术栈：`python` + `flask` + `mysql`
    - 项目结构说明
      - `app`：项目源码
        - `scripts`：项目脚本
        - `utils`：项目工具类
        - `main.py`：项目入口
      - `README.md`：项目说明
  - 后端项目(3)：`stock-backend-raw-main`
    - 技术栈：`rust` + `mongodb` + `rocket`  
    - 项目结构说明
      - `algorithm`：项目算法
      - `change`：项目变化
      - `cron-algorithm`：项目定时算法
      - `python-src`: 项目python脚本
      - `src`：项目源码
        - `algorithm`：项目算法
        - `app`：项目源码
        - `python`：项目python运行
        - `watch`：项目监听
        - `main.rs`：项目入口
        - `utils.rs`：项目工具类
        - `error.rs`：项目错误
        - `init.rs`：项目初始化
      - `Cargo.toml`：项目依赖
      - `requirements.txt`：项目依赖
      - `Dockerfile`：docker配置
      - `docker-compose.yml`：docker-composed配置
      - `README.md`：项目说明

### 3. 后续项目工作

#### 3.1 项目规划
- 后续项目工作主要包括项目重构、项目迁移和项目设计等。
  - 项目重构：由于原型项目的代码质量不高，所以需要对原型项目进行重构，以提高代码质量。
  - 项目迁移：由于原型项目的技术栈不合理，所以需要对原型项目进行迁移，以提高项目的可维护性。
  - 项目设计：由于原型项目的功能不完善，所以需要对原型项目进行设计，以提高项目的可用性。

#### 3.2 项目设计
- 作为原型项目的开发者，我对项目的设计有以下几点建议：
  - 项目技术栈：由于原型项目的技术栈不合理，所以需要对原型项目的技术栈进行调整。
  - 项目架构：由于原型项目的架构不合理，所以需要对原型项目的架构进行调整。
  - 项目功能：由于原型项目的功能不完善，所以需要对原型项目的功能进行调整。

##### 3.2.1 项目技术栈
  - 原本的技术栈涉及太多语言，不利于项目的部署与维护，所以需要对技术栈进行调整。
    - 方案一：
      - 前端：`vue3` + `element-plus` + `axios` + `pinia` + `vue-router` + `echarts`
      - 后端：`python` + `flask` 或者 `django` + `mongodb`
    - 方案二：
      - 前端： `nuxt3` + `element-plus` + `axios` + `pinia` + `prisma` + `echarts`
      - 后端： `python` + `flask` 或者 `django` + `mongodb`
  - 两种方案的区别在于前端的技术栈，方案一使用的是`vue3`，而方案二使用的是`nuxt3`。使用`nuxt3`的好处是可以使用`prisma`，
而`prisma`可以帮助我们更好的管理数据库，而且拥有SSR，对于部署以及SEO都很友好。对于一些不涉及python脚本的接口，可以直接在nuxt项目中使用prisma来管理。但是两种方案涉及到的前端
技术栈都比较多且杂，需要有比较好的vue3基础（选项式）。涉及到的文档如下：[vue3](https://cn.vuejs.org/), [nuxt3](https://nuxt.com.cn/docs/guide/directory-structure/server)，[prisma](https://prisma.nodejs.cn/)，
[pinia](https://pinia.esm.dev/)，[element-plus](https://element-plus.org/#/zh-CN/component/installation)，[echarts](https://echarts.apache.org/zh/index.html)。
#### 3.3 后期规划
- 项目需要在两种方案中选择一种，然后进行项目的重构和迁移。对于之前原型项目的api和数据库表，仅供参考，可以根据自己的需求进行修改。之前的api设计的极其不规范，而且存在重复的现象
在之后的重构中，在api设计上，需要遵循restful规范，对于数据库表的设计，需要遵循数据库设计的规范，比如说，表名需要使用复数形式，字段名需要使用小写字母，字段名需要使用下划线分割等。
- api设计示例：
  - `GET` `/api/stock` : 获取股票列表
  - `GET` `/api/stock/:id` : 获取股票详情
  - `POST` `/api/stock` : 添加股票
  - `PUT` `/api/stock/:id` : 更新股票
  - `DELETE` `/api/stock/:id` : 删除股票
### 4. 项目总结
- 本项目的主要目标是通过因子分析、算法运行和场景运行等方式，对股票进行研究和分析。我们成功地实现了因子管理、算法管理、场景管理和股票管理等功能，提供了一个全面的平台，供用户进行深入的股票研究。
在项目过程中，我们遇到了许多挑战，包括代码质量的提高以及项目架构的优化。我们通过学习和实践，完成了原型项目的开发。
之后的项目，还需要后续学习更多新的技术和知识，包括`vue3`、`element-plus`、`axios`、`pinia`、`vue-router`、`echarts`等前端技术，以及`python`、`flask`、`django`、`mongodb`等后端技术，还有如何设计和实现RESTful API，以及如何设计和管理数据库。
对于未来，需要进一步优化和扩展项目。我们将继续提高代码质量，优化项目架构，增加新的功能，以满足用户的需求，提高项目的效率和效果。
