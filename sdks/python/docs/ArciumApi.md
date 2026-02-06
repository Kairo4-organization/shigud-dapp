# sipher_client.ArciumApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**decrypt_arcium_result**](ArciumApi.md#decrypt_arcium_result) | **POST** /v1/arcium/decrypt | Decrypt computation result
[**get_arcium_computation_status**](ArciumApi.md#get_arcium_computation_status) | **GET** /v1/arcium/compute/{id}/status | Get computation status
[**submit_arcium_computation**](ArciumApi.md#submit_arcium_computation) | **POST** /v1/arcium/compute | Submit MPC computation


# **decrypt_arcium_result**
> DecryptArciumResult200Response decrypt_arcium_result(decrypt_arcium_result_request)

Decrypt computation result

Decrypt the output of a completed MPC computation using a viewing key.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.decrypt_arcium_result200_response import DecryptArciumResult200Response
from sipher_client.models.decrypt_arcium_result_request import DecryptArciumResultRequest
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.ArciumApi(api_client)
    decrypt_arcium_result_request = sipher_client.DecryptArciumResultRequest() # DecryptArciumResultRequest | 

    try:
        # Decrypt computation result
        api_response = api_instance.decrypt_arcium_result(decrypt_arcium_result_request)
        print("The response of ArciumApi->decrypt_arcium_result:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArciumApi->decrypt_arcium_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **decrypt_arcium_result_request** | [**DecryptArciumResultRequest**](DecryptArciumResultRequest.md)|  | 

### Return type

[**DecryptArciumResult200Response**](DecryptArciumResult200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Decryption result |  -  |
**400** | Decrypt failed or computation incomplete |  -  |
**404** | Computation not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_arcium_computation_status**
> GetArciumComputationStatus200Response get_arcium_computation_status(id)

Get computation status

Poll the status of an MPC computation. Status progresses: submitted → encrypting → processing → finalizing → completed.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.get_arcium_computation_status200_response import GetArciumComputationStatus200Response
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.ArciumApi(api_client)
    id = 'id_example' # str | Computation ID

    try:
        # Get computation status
        api_response = api_instance.get_arcium_computation_status(id)
        print("The response of ArciumApi->get_arcium_computation_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArciumApi->get_arcium_computation_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Computation ID | 

### Return type

[**GetArciumComputationStatus200Response**](GetArciumComputationStatus200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Computation status |  -  |
**404** | Computation not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_arcium_computation**
> SubmitArciumComputation200Response submit_arcium_computation(submit_arcium_computation_request)

Submit MPC computation

Submit an encrypted computation to the Arcium MPC cluster. Returns a computation ID for status polling.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.submit_arcium_computation200_response import SubmitArciumComputation200Response
from sipher_client.models.submit_arcium_computation_request import SubmitArciumComputationRequest
from sipher_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://sipher.sip-protocol.org
# See configuration.py for a list of all supported configuration parameters.
configuration = sipher_client.Configuration(
    host = "https://sipher.sip-protocol.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with sipher_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = sipher_client.ArciumApi(api_client)
    submit_arcium_computation_request = sipher_client.SubmitArciumComputationRequest() # SubmitArciumComputationRequest | 

    try:
        # Submit MPC computation
        api_response = api_instance.submit_arcium_computation(submit_arcium_computation_request)
        print("The response of ArciumApi->submit_arcium_computation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArciumApi->submit_arcium_computation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submit_arcium_computation_request** | [**SubmitArciumComputationRequest**](SubmitArciumComputationRequest.md)|  | 

### Return type

[**SubmitArciumComputation200Response**](SubmitArciumComputation200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Computation submitted successfully |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

