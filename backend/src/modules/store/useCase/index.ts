import { StoreRepositoryInMemory } from "../repositories/in-memory/StoreRepositoryInMemory";
import { CreateStoreController } from "./createStore/CreateStoreController";
import { CreateStoreUseCase } from "./createStore/CreateStoreUseCase";
import { ListStoreController } from "./listStore/ListStoreController";
import { ListStoreUseCase } from "./listStore/ListStoreUseCase";


const storeRepositoryInMemory = StoreRepositoryInMemory.getInstance();

const createStoreUseCase = new CreateStoreUseCase(storeRepositoryInMemory);
const createStoreController = new CreateStoreController(createStoreUseCase);

const listStoryUseCase = new ListStoreUseCase(storeRepositoryInMemory);
const listStoreController = new ListStoreController(listStoryUseCase)


export { createStoreUseCase, listStoryUseCase, createStoreController, listStoreController }