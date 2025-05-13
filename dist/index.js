"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../src/generated/prisma");
const client = new prisma_1.PrismaClient();
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const userr = yield client.user.findFirst({
            where: {
                id: "6823a468da2f53ec55c98b24"
            },
            // select:{
            //     username:true
            // }
        });
        console.log(userr);
    });
}
createUser();
