import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_luckyentryticket_list = createAsyncThunk(
  "luckyentrytickets/api_v1_luckyentryticket_list",
  async payload => {
    const response = await apiService.api_v1_luckyentryticket_list(payload)
    return response.data
  }
)
export const api_v1_luckyentryticket_create = createAsyncThunk(
  "luckyentrytickets/api_v1_luckyentryticket_create",
  async payload => {
    const response = await apiService.api_v1_luckyentryticket_create(payload)
    return response.data
  }
)
export const api_v1_luckyentryticket_read = createAsyncThunk(
  "luckyentrytickets/api_v1_luckyentryticket_read",
  async payload => {
    const response = await apiService.api_v1_luckyentryticket_read(payload)
    return response.data
  }
)
export const api_v1_luckyentryticket_update = createAsyncThunk(
  "luckyentrytickets/api_v1_luckyentryticket_update",
  async payload => {
    const response = await apiService.api_v1_luckyentryticket_update(payload)
    return response.data
  }
)
export const api_v1_luckyentryticket_partial_update = createAsyncThunk(
  "luckyentrytickets/api_v1_luckyentryticket_partial_update",
  async payload => {
    const response = await apiService.api_v1_luckyentryticket_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_luckyentryticket_delete = createAsyncThunk(
  "luckyentrytickets/api_v1_luckyentryticket_delete",
  async payload => {
    const response = await apiService.api_v1_luckyentryticket_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const luckyentryticketsSlice = createSlice({
  name: "luckyentrytickets",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_luckyentryticket_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_luckyentryticket_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_luckyentryticket_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_luckyentryticket_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_luckyentryticket_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_luckyentryticket_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_luckyentryticket_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_luckyentryticket_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_luckyentryticket_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_luckyentryticket_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_luckyentryticket_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_luckyentryticket_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_luckyentryticket_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_luckyentryticket_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_luckyentryticket_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_luckyentryticket_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_luckyentryticket_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_luckyentryticket_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_luckyentryticket_list,
  api_v1_luckyentryticket_create,
  api_v1_luckyentryticket_read,
  api_v1_luckyentryticket_update,
  api_v1_luckyentryticket_partial_update,
  api_v1_luckyentryticket_delete,
  slice: luckyentryticketsSlice
}
