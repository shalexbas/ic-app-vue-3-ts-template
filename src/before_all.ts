import { Buffer } from "buffer";

//@dfinity/agent requires this. Can be removed once it's fixed
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).global = window;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).Buffer = Buffer;

export const dummy = "dummy";
