import React from 'react';
import Abnormal from './pages/abnormal';
import Personal from './pages/personal';
import Form from './pages/form';
import Detail from './pages/detail';
import Result from './pages/result.lugiad';
import List from './pages/list';

const data = [
  {
    name: 'Dashboard',
    icon: 'lugia-icon-financial_sad',
    text: 'Dashboard',
    children: [
      {
        name: 'analyse',
        icon: 'lugia-icon-financial_sad',
        text: '分析页',
      },
      {
        name: 'monitor',
        text: '监控页',
        icon: 'lugia-icon-financial_sad',
      },
    ],
  },
  { name: 'form', text: '表单页', icon: 'lugia-icon-financial_editor' },
  { name: 'list', text: '列表页', icon: 'lugia-icon-financial_table' },
  { name: 'detail', text: '详情页', icon: 'lugia-icon-financial_sad_o' },
];

export default [
  {
    value: 'Dashboard',
    text: 'Dashboard',
    icon: 'lugia-icon-financial_sad',
    children: [
      {
        value: '/analyse',
        text: '分析页',
        path: './pages/Dashboard/analyse',
      },
      {
        value: '/monitor',
        text: '监控页',
        path: './pages/Dashboard/monitor',
      },
      {
        value: '/desk',
        text: '工作台',
        path: './pages/Dashboard/desk',
      },
    ],
  },
  {
    value: '/user',
    text: '用户管理',
    icon: 'lugia-icon-financial_user',
    path: './pages/user',
  },
  {
    value: '/form',
    text: '表单页',
    icon: 'lugia-icon-financial_editor',
    component: Form,
  },
  {
    value: '/list',
    text: '列表页',
    icon: 'lugia-icon-financial_table',
    component: List,
  },
  {
    value: '/detail',
    text: '详情页',
    icon: 'lugia-icon-financial_sad_o',
    component: Detail,
  },
  {
    value: '/result',
    text: '结果页',
    icon: 'lugia-icon-reminder_check_circle_o',
    component: Result,
  },
  {
    value: '/abnormal',
    text: '异常页',
    icon: 'lugia-icon-reminder_warning',
    component: Abnormal,
  },
  {
    value: '/personal',
    text: '个人页',
    icon: 'lugia-icon-financial_user',
    component: Personal,
  },
];
