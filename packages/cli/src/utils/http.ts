import axios, { Axios, AxiosResponse } from 'axios';
import { either as E, taskEither as TE, array as A, option as O, map as M, set as S } from 'fp-ts';
import { createWriteStream, statSync } from 'fs';
import stream from 'stream';
import * as util from 'util';
import * as fs from 'fs';
import { isFile } from './fs';
const pipeline = util.promisify(stream.pipeline);

export const httpGet = <T = any>(url: string) => TE.tryCatch<Error, AxiosResponse<T>>(
  () => axios.get(url),
  reason => new Error(String(reason))
);


export const downloadFile = (fileUrl: string, outputLocationPath: string) => TE.tryCatch(
  async () => {

    if(isFile(outputLocationPath)) {
      const head = await axios.head(fileUrl);
      const length = Number(head.headers['content-length']);
      if(statSync(outputLocationPath).size == length) {
        return 304;
      }
    }

    const request = await axios.get(fileUrl, { responseType: 'stream' });
    await pipeline(request.data, fs.createWriteStream(outputLocationPath));
    return request.status;
  },
  (reason) => new Error(`Failed to download file: ${fileUrl}: ${reason}`),
);
