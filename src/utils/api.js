/**
 * API utility functions for making HTTP requests
 */

// Base API URL - replace with actual API endpoint when available
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.katisatech.com/api';

/**
 * Generic fetch wrapper with error handling
 * @param {string} url - The URL to fetch
 * @param {Object} options - Fetch options
 * @returns {Promise} - Promise resolving to the response data
 */
const fetchWithErrorHandling = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    // Handle non-2xx responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Request failed with status ${response.status}`);
    }

    // Check if response is empty
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return await response.text();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

/**
 * GET request
 * @param {string} endpoint - API endpoint
 * @param {Object} params - Query parameters
 * @returns {Promise} - Promise resolving to the response data
 */
export const get = async (endpoint, params = {}) => {
  const url = new URL(`${API_BASE_URL}${endpoint}`);
  
  // Add query parameters
  Object.keys(params).forEach(key => {
    if (params[key] !== undefined && params[key] !== null) {
      url.searchParams.append(key, params[key]);
    }
  });
  
  return fetchWithErrorHandling(url.toString(), { method: 'GET' });
};

/**
 * POST request
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request body data
 * @returns {Promise} - Promise resolving to the response data
 */
export const post = async (endpoint, data = {}) => {
  return fetchWithErrorHandling(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

/**
 * PUT request
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request body data
 * @returns {Promise} - Promise resolving to the response data
 */
export const put = async (endpoint, data = {}) => {
  return fetchWithErrorHandling(`${API_BASE_URL}${endpoint}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

/**
 * PATCH request
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request body data
 * @returns {Promise} - Promise resolving to the response data
 */
export const patch = async (endpoint, data = {}) => {
  return fetchWithErrorHandling(`${API_BASE_URL}${endpoint}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
};

/**
 * DELETE request
 * @param {string} endpoint - API endpoint
 * @returns {Promise} - Promise resolving to the response data
 */
export const del = async (endpoint) => {
  return fetchWithErrorHandling(`${API_BASE_URL}${endpoint}`, {
    method: 'DELETE',
  });
};

/**
 * API endpoints for different resources
 */
export const endpoints = {
  blog: {
    list: '/blog',
    detail: (slug) => `/blog/${slug}`,
    categories: '/blog/categories',
    search: '/blog/search',
  },
  contact: {
    submit: '/contact',
    newsletter: '/newsletter/subscribe',
  },
  services: {
    list: '/services',
    detail: (id) => `/services/${id}`,
  },
  internship: {
    list: '/internship/programs',
    apply: '/internship/apply',
  },
};

export default {
  get,
  post,
  put,
  patch,
  del,
  endpoints,
};
