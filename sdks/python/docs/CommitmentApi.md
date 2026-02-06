# sipher_client.CommitmentApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commitment_add**](CommitmentApi.md#commitment_add) | **POST** /v1/commitment/add | Add two commitments (homomorphic)
[**commitment_create**](CommitmentApi.md#commitment_create) | **POST** /v1/commitment/create | Create Pedersen commitment
[**commitment_create_batch**](CommitmentApi.md#commitment_create_batch) | **POST** /v1/commitment/create/batch | Batch create Pedersen commitments
[**commitment_subtract**](CommitmentApi.md#commitment_subtract) | **POST** /v1/commitment/subtract | Subtract two commitments (homomorphic)
[**commitment_verify**](CommitmentApi.md#commitment_verify) | **POST** /v1/commitment/verify | Verify Pedersen commitment


# **commitment_add**
> CommitmentAdd200Response commitment_add(commitment_add_request)

Add two commitments (homomorphic)

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.commitment_add200_response import CommitmentAdd200Response
from sipher_client.models.commitment_add_request import CommitmentAddRequest
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
    api_instance = sipher_client.CommitmentApi(api_client)
    commitment_add_request = sipher_client.CommitmentAddRequest() # CommitmentAddRequest | 

    try:
        # Add two commitments (homomorphic)
        api_response = api_instance.commitment_add(commitment_add_request)
        print("The response of CommitmentApi->commitment_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommitmentApi->commitment_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commitment_add_request** | [**CommitmentAddRequest**](CommitmentAddRequest.md)|  | 

### Return type

[**CommitmentAdd200Response**](CommitmentAdd200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sum commitment |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commitment_create**
> CommitmentCreate200Response commitment_create(commitment_create_request)

Create Pedersen commitment

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.commitment_create200_response import CommitmentCreate200Response
from sipher_client.models.commitment_create_request import CommitmentCreateRequest
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
    api_instance = sipher_client.CommitmentApi(api_client)
    commitment_create_request = sipher_client.CommitmentCreateRequest() # CommitmentCreateRequest | 

    try:
        # Create Pedersen commitment
        api_response = api_instance.commitment_create(commitment_create_request)
        print("The response of CommitmentApi->commitment_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommitmentApi->commitment_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commitment_create_request** | [**CommitmentCreateRequest**](CommitmentCreateRequest.md)|  | 

### Return type

[**CommitmentCreate200Response**](CommitmentCreate200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Commitment created |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commitment_create_batch**
> CommitmentCreateBatch200Response commitment_create_batch(commitment_create_batch_request)

Batch create Pedersen commitments

Create multiple Pedersen commitments in a single call. Max 100 per request.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.commitment_create_batch200_response import CommitmentCreateBatch200Response
from sipher_client.models.commitment_create_batch_request import CommitmentCreateBatchRequest
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
    api_instance = sipher_client.CommitmentApi(api_client)
    commitment_create_batch_request = sipher_client.CommitmentCreateBatchRequest() # CommitmentCreateBatchRequest | 

    try:
        # Batch create Pedersen commitments
        api_response = api_instance.commitment_create_batch(commitment_create_batch_request)
        print("The response of CommitmentApi->commitment_create_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommitmentApi->commitment_create_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commitment_create_batch_request** | [**CommitmentCreateBatchRequest**](CommitmentCreateBatchRequest.md)|  | 

### Return type

[**CommitmentCreateBatch200Response**](CommitmentCreateBatch200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Batch commitment results |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commitment_subtract**
> CommitmentAdd200Response commitment_subtract(commitment_add_request)

Subtract two commitments (homomorphic)

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.commitment_add200_response import CommitmentAdd200Response
from sipher_client.models.commitment_add_request import CommitmentAddRequest
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
    api_instance = sipher_client.CommitmentApi(api_client)
    commitment_add_request = sipher_client.CommitmentAddRequest() # CommitmentAddRequest | 

    try:
        # Subtract two commitments (homomorphic)
        api_response = api_instance.commitment_subtract(commitment_add_request)
        print("The response of CommitmentApi->commitment_subtract:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommitmentApi->commitment_subtract: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commitment_add_request** | [**CommitmentAddRequest**](CommitmentAddRequest.md)|  | 

### Return type

[**CommitmentAdd200Response**](CommitmentAdd200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Difference commitment |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commitment_verify**
> CommitmentVerify200Response commitment_verify(commitment_verify_request)

Verify Pedersen commitment

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.commitment_verify200_response import CommitmentVerify200Response
from sipher_client.models.commitment_verify_request import CommitmentVerifyRequest
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
    api_instance = sipher_client.CommitmentApi(api_client)
    commitment_verify_request = sipher_client.CommitmentVerifyRequest() # CommitmentVerifyRequest | 

    try:
        # Verify Pedersen commitment
        api_response = api_instance.commitment_verify(commitment_verify_request)
        print("The response of CommitmentApi->commitment_verify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommitmentApi->commitment_verify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commitment_verify_request** | [**CommitmentVerifyRequest**](CommitmentVerifyRequest.md)|  | 

### Return type

[**CommitmentVerify200Response**](CommitmentVerify200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Verification result |  -  |
**400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

