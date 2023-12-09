/**
 * @typedef {Object} Article
 * @property {number} id - 게시글 ID
 * @property {string} title - 게시글 제목
 * @property {string} content - 게시글 내용
 */

import axios from "axios";

const URL = process.env.NEXT_PUBLIC_SERVER_URL;

/**
 * @function fetchArticles
 * @description API에서 게시글 목록을 가져옵니다.
 * @returns {Array<Article>|Array} 게시글 목록 또는 404 에러가 발생한 경우 빈 배열
 * @throws 게시글 목록을 가져오는 데 실패하면 (404 에러 제외) 오류를 발생시킵니다.
 */
export async function fetchArticles() {
  try {
    const response = await axios.get(`${URL}/articles`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return [];
    }
    throw new Error("데이터를 가져오는 데 실패했습니다!");
  }
}

/**
 * @function fetchArticle
 * @description API에서 ID 에 해당하는 게시글을 가져옵니다.
 * @param {number} id - 가져올 게시글의 ID
 * @returns {Article|null} 게시글 객체
 */
export async function fetchArticle(id) {
  try {
    const response = await axios.get(`${URL}/articles/${id}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return null;
    }
    throw new Error("데이터를 가져오는 데 실패했습니다!");
  }
}

/**
 * @function createArticle
 * @description API에 새 게시글을 생성합니다.
 * @param {string} title - 게시글의 제목
 * @param {string} content - 게시글의 내용
 * @returns {{id: number}} 생성된 게시글의 ID를 포함하는 객체
 * @throws 게시글 생성에 실패하면 오류를 발생시킵니다.
 */
export async function createArticle(title, content) {
  try {
    const response = await axios.post(`${URL}/articles`, { title, content });
    return response.data;
  } catch (error) {
    throw new Error("게시글을 생성하는 데 실패했습니다!");
  }
}

/**
 * @function deleteArticle
 * @description API에서 ID에 해당하는 게시글을 삭제합니다.
 * @param {number} id - 삭제할 게시글의 ID
 * @returns {Promise<void>} 아무것도 반환하지 않습니다.
 * @throws 게시글 삭제에 실패하면 오류를 발생시킵니다.
 */
export async function deleteArticle(id) {
  try {
    await axios.delete(`${URL}/articles/${id}`);
  } catch (error) {
    throw new Error("게시글을 삭제하는 데 실패했습니다!");
  }
}

/**
 * @function updateArticle
 * @description API에서 ID에 해당하는 게시글을 업데이트합니다.
 * @param {number} id - 업데이트할 게시글의 ID
 * @param {string} title - 게시글의 새로운 제목
 * @param {string} content - 게시글의 새로운 내용
 * @returns {{id: number}} 업데이트된 게시글의 ID를 포함하는 객체
 * @throws 게시글 업데이트에 실패하면 오류를 발생시킵니다.
 */
export async function updateArticle(id, title, content) {
  try {
    const response = await axios.put(`${URL}/articles/${id}`, { title, content });
    return response.data;
  } catch (error) {
    throw new Error("게시글을 업데이트하는 데 실패했습니다!");
  }
}
