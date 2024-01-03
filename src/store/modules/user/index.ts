// src/store/modules/user/index.ts
import { defineStore } from 'pinia';
 
import { store } from '@/store';
import { ref } from 'vue';
 
export const useUserStore = defineStore('user', () => {
    // state
    const token = ref<string>('');
    const nickname = ref<string>('');
    const avatar = ref<string>('');
    const roles = ref<Array<string>>([]); // 用户角色编码集合 → 判断路由权限
    const perms = ref<Array<string>>([]); // 用户权限编码集合 → 判断按钮权限
 
    // actions
 
    // 登录
    function login(loginData: any) {
        return new Promise<void>((resolve, reject) => {
            console.log(loginData)
            // loginApi(loginData) // 调用登录API
        });
    }
 
    // 获取信息(用户昵称、头像、角色集合、权限集合)
    function getInfo() {
        return new Promise<any>((resolve, reject) => {
            // getUserInfo() // 调用获取用户信息API
        });
    }
 
    // 注销
    function logout() {
        return new Promise<void>((resolve, reject) => {
            // logoutApi() // 调用注销API
        });
    }
 
    // 重置
    function resetToken() {
        // removeToken(); 调用删除Token方法
        token.value = '';
        nickname.value = '';
        avatar.value = '';
        roles.value = [];
        perms.value = [];
    }
    return {
        token,
        nickname,
        avatar,
        roles,
        perms,
        login,
        getInfo,
        logout,
        resetToken
    };
});
 
// 非setup
export function useUserStoreHook() {
    return useUserStore(store);
}