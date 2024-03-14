<template>
  <div class="space-y-12">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Uploader</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">
        Upload Excel data file
      </p>
      <Toast :message="message" v-show="uploadSuccess"></Toast>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="col-span-full">
          <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900"> Upload Excel data
            file</label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div class="text-center">
              <IconDocumentation class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true"/>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload"
                       class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" ref="file" @change="fileUploaded" name="file-upload" type="file"
                         class="sr-only"/>
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">xlsx up to 250MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="submit" @click="uploadFile"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      Save
    </button>
  </div>

</template>

<script>
import IconDocumentation from '@/components/icons/IconDocumentation.vue';
import {ref} from 'vue';
import axios from 'axios';
import Toast from '@/components/Toast.vue';

export default {
  name: 'Home',
  components: {
    Toast,
    IconDocumentation
  },
  setup(props) {
    const file = ref(null);
    const uploadSuccess = ref(false);
    const message = ref('');
    const fileUploaded = (e) => {
      file.value = event.target.files[0];
    };

    const uploadFile = () => {

      let formData = new FormData();
      formData.append('file', file.value);
      axios.post('/v1/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        message.value = response.data.message;
        uploadSuccess.value = true;
      });
    };

    return {
      fileUploaded,
      uploadFile,
      uploadSuccess,
      message
    };
  }
};
</script>