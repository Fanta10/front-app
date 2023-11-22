import { Environ } from "src/app/environ/environ/models/environ";
import { Logiciel } from "src/app/logiciel/logiciel/models/logiciel";

export interface AppEnv {
  idAppEnv:number,
  codeAppEnv:String,
  logiciel:Logiciel,
  environ:Environ
}
