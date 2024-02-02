import { ref } from 'vue'

export default function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  fetch(url)
    .then((res) => data.value = res.data.articles)
    .catch((err) => (error.value = err))

  return { data, error }
}