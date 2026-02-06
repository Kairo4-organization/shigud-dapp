# sipher_client.ProofsApi

All URIs are relative to *https://sipher.sip-protocol.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**proofs_fulfillment_generate**](ProofsApi.md#proofs_fulfillment_generate) | **POST** /v1/proofs/fulfillment/generate | Generate fulfillment proof
[**proofs_fulfillment_verify**](ProofsApi.md#proofs_fulfillment_verify) | **POST** /v1/proofs/fulfillment/verify | Verify fulfillment proof
[**proofs_funding_generate**](ProofsApi.md#proofs_funding_generate) | **POST** /v1/proofs/funding/generate | Generate funding proof
[**proofs_funding_verify**](ProofsApi.md#proofs_funding_verify) | **POST** /v1/proofs/funding/verify | Verify funding proof
[**proofs_range_generate**](ProofsApi.md#proofs_range_generate) | **POST** /v1/proofs/range/generate | Generate STARK range proof
[**proofs_range_verify**](ProofsApi.md#proofs_range_verify) | **POST** /v1/proofs/range/verify | Verify STARK range proof
[**proofs_validity_generate**](ProofsApi.md#proofs_validity_generate) | **POST** /v1/proofs/validity/generate | Generate validity proof
[**proofs_validity_verify**](ProofsApi.md#proofs_validity_verify) | **POST** /v1/proofs/validity/verify | Verify validity proof


# **proofs_fulfillment_generate**
> ProofsFulfillmentGenerate200Response proofs_fulfillment_generate(proofs_fulfillment_generate_request)

Generate fulfillment proof

Generates a ZK proof that the solver delivered output >= minimum to the correct recipient.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.proofs_fulfillment_generate200_response import ProofsFulfillmentGenerate200Response
from sipher_client.models.proofs_fulfillment_generate_request import ProofsFulfillmentGenerateRequest
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
    api_instance = sipher_client.ProofsApi(api_client)
    proofs_fulfillment_generate_request = sipher_client.ProofsFulfillmentGenerateRequest() # ProofsFulfillmentGenerateRequest | 

    try:
        # Generate fulfillment proof
        api_response = api_instance.proofs_fulfillment_generate(proofs_fulfillment_generate_request)
        print("The response of ProofsApi->proofs_fulfillment_generate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProofsApi->proofs_fulfillment_generate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proofs_fulfillment_generate_request** | [**ProofsFulfillmentGenerateRequest**](ProofsFulfillmentGenerateRequest.md)|  | 

### Return type

[**ProofsFulfillmentGenerate200Response**](ProofsFulfillmentGenerate200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Proof generated |  -  |
**400** | Validation or proof generation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **proofs_fulfillment_verify**
> CommitmentVerify200Response proofs_fulfillment_verify(proofs_fulfillment_verify_request)

Verify fulfillment proof

Verifies a previously generated fulfillment proof.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.commitment_verify200_response import CommitmentVerify200Response
from sipher_client.models.proofs_fulfillment_verify_request import ProofsFulfillmentVerifyRequest
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
    api_instance = sipher_client.ProofsApi(api_client)
    proofs_fulfillment_verify_request = sipher_client.ProofsFulfillmentVerifyRequest() # ProofsFulfillmentVerifyRequest | 

    try:
        # Verify fulfillment proof
        api_response = api_instance.proofs_fulfillment_verify(proofs_fulfillment_verify_request)
        print("The response of ProofsApi->proofs_fulfillment_verify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProofsApi->proofs_fulfillment_verify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proofs_fulfillment_verify_request** | [**ProofsFulfillmentVerifyRequest**](ProofsFulfillmentVerifyRequest.md)|  | 

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

# **proofs_funding_generate**
> ProofsFundingGenerate200Response proofs_funding_generate(proofs_funding_generate_request)

Generate funding proof

Generates a ZK proof that balance >= minimumRequired without revealing the balance.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.proofs_funding_generate200_response import ProofsFundingGenerate200Response
from sipher_client.models.proofs_funding_generate_request import ProofsFundingGenerateRequest
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
    api_instance = sipher_client.ProofsApi(api_client)
    proofs_funding_generate_request = sipher_client.ProofsFundingGenerateRequest() # ProofsFundingGenerateRequest | 

    try:
        # Generate funding proof
        api_response = api_instance.proofs_funding_generate(proofs_funding_generate_request)
        print("The response of ProofsApi->proofs_funding_generate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProofsApi->proofs_funding_generate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proofs_funding_generate_request** | [**ProofsFundingGenerateRequest**](ProofsFundingGenerateRequest.md)|  | 

### Return type

[**ProofsFundingGenerate200Response**](ProofsFundingGenerate200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Proof generated |  -  |
**400** | Validation or proof generation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **proofs_funding_verify**
> CommitmentVerify200Response proofs_funding_verify(proofs_funding_verify_request)

Verify funding proof

Verifies a previously generated funding proof.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.commitment_verify200_response import CommitmentVerify200Response
from sipher_client.models.proofs_funding_verify_request import ProofsFundingVerifyRequest
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
    api_instance = sipher_client.ProofsApi(api_client)
    proofs_funding_verify_request = sipher_client.ProofsFundingVerifyRequest() # ProofsFundingVerifyRequest | 

    try:
        # Verify funding proof
        api_response = api_instance.proofs_funding_verify(proofs_funding_verify_request)
        print("The response of ProofsApi->proofs_funding_verify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProofsApi->proofs_funding_verify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proofs_funding_verify_request** | [**ProofsFundingVerifyRequest**](ProofsFundingVerifyRequest.md)|  | 

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

# **proofs_range_generate**
> ProofsRangeGenerate200Response proofs_range_generate(proofs_range_generate_request)

Generate STARK range proof

Generates a STARK-based range proof that value >= threshold on a Pedersen commitment without revealing the value. Uses M31 limb decomposition. Currently uses a mock STARK prover — real Murkl integration coming soon.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.proofs_range_generate200_response import ProofsRangeGenerate200Response
from sipher_client.models.proofs_range_generate_request import ProofsRangeGenerateRequest
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
    api_instance = sipher_client.ProofsApi(api_client)
    proofs_range_generate_request = sipher_client.ProofsRangeGenerateRequest() # ProofsRangeGenerateRequest | 

    try:
        # Generate STARK range proof
        api_response = api_instance.proofs_range_generate(proofs_range_generate_request)
        print("The response of ProofsApi->proofs_range_generate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProofsApi->proofs_range_generate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proofs_range_generate_request** | [**ProofsRangeGenerateRequest**](ProofsRangeGenerateRequest.md)|  | 

### Return type

[**ProofsRangeGenerate200Response**](ProofsRangeGenerate200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Range proof generated |  -  |
**400** | Validation or proof generation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **proofs_range_verify**
> CommitmentVerify200Response proofs_range_verify(proofs_range_verify_request)

Verify STARK range proof

Verifies a previously generated STARK range proof.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.commitment_verify200_response import CommitmentVerify200Response
from sipher_client.models.proofs_range_verify_request import ProofsRangeVerifyRequest
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
    api_instance = sipher_client.ProofsApi(api_client)
    proofs_range_verify_request = sipher_client.ProofsRangeVerifyRequest() # ProofsRangeVerifyRequest | 

    try:
        # Verify STARK range proof
        api_response = api_instance.proofs_range_verify(proofs_range_verify_request)
        print("The response of ProofsApi->proofs_range_verify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProofsApi->proofs_range_verify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proofs_range_verify_request** | [**ProofsRangeVerifyRequest**](ProofsRangeVerifyRequest.md)|  | 

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

# **proofs_validity_generate**
> ProofsValidityGenerate200Response proofs_validity_generate(proofs_validity_generate_request)

Generate validity proof

Generates a ZK proof that an intent is authorized by the sender without revealing the sender.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.proofs_validity_generate200_response import ProofsValidityGenerate200Response
from sipher_client.models.proofs_validity_generate_request import ProofsValidityGenerateRequest
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
    api_instance = sipher_client.ProofsApi(api_client)
    proofs_validity_generate_request = sipher_client.ProofsValidityGenerateRequest() # ProofsValidityGenerateRequest | 

    try:
        # Generate validity proof
        api_response = api_instance.proofs_validity_generate(proofs_validity_generate_request)
        print("The response of ProofsApi->proofs_validity_generate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProofsApi->proofs_validity_generate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proofs_validity_generate_request** | [**ProofsValidityGenerateRequest**](ProofsValidityGenerateRequest.md)|  | 

### Return type

[**ProofsValidityGenerate200Response**](ProofsValidityGenerate200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Proof generated |  -  |
**400** | Validation or proof generation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **proofs_validity_verify**
> CommitmentVerify200Response proofs_validity_verify(proofs_validity_verify_request)

Verify validity proof

Verifies a previously generated validity proof.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import sipher_client
from sipher_client.models.commitment_verify200_response import CommitmentVerify200Response
from sipher_client.models.proofs_validity_verify_request import ProofsValidityVerifyRequest
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
    api_instance = sipher_client.ProofsApi(api_client)
    proofs_validity_verify_request = sipher_client.ProofsValidityVerifyRequest() # ProofsValidityVerifyRequest | 

    try:
        # Verify validity proof
        api_response = api_instance.proofs_validity_verify(proofs_validity_verify_request)
        print("The response of ProofsApi->proofs_validity_verify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProofsApi->proofs_validity_verify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proofs_validity_verify_request** | [**ProofsValidityVerifyRequest**](ProofsValidityVerifyRequest.md)|  | 

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

