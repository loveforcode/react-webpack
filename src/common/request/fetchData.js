import $ from 'jquery';
import { Promise } from 'es6-promise';

export const fetchData = ({ url, method = 'GET', data, timeout = 30000 }) =>
    new Promise((resolve, reject) => {
        $.ajax({
            url,
            type: method,
            data,
            timeout,
            dataType: 'json',
            contentType: 'application/json;charset=utf-8',
            success(res, status, xhr) {
                resolve(res);
            },
            error(xhr, type) {
                const err = {
                    type,
                    msg: url
                };
                reject(err);
            }
        })
    })

export const fetchDataSOA = ({ url, method = 'GET', data, timeout = 30000 }) =>
    new Promise((resolve, reject) => {
        $.ajax({
            url,
            type: method,
            data,
            timeout,
            contentType: 'application/json;charset=utf-8',
            success(res, status, xhr) {
                resolve(res);
            },
            error(xhr, type) {
                const err = {
                    type,
                    msg: url
                };
                reject(err);
            }
        })
    })